import { useState, useRef, useCallback } from 'react'
import Certificate from './components/Certificate'

export default function App() {
  const [participantId, setParticipantId] = useState('')
  const [name, setName]= useState('')
  const certRef = useRef(null)


  const handleDownload = useCallback(async () => {
    const el = certRef.current
    if (!el) return

    // Dynamically load html2canvas if not already available
    let html2canvas = window.html2canvas
    if (!html2canvas) {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script')
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'
        s.onload = resolve
        s.onerror = reject
        document.head.appendChild(s)
      })
      html2canvas = window.html2canvas
    }

    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    })

    const a = document.createElement('a')
    a.download = `certificate_${name.trim().replace(/\s+/g, '_') || 'participant'}.png`
    a.href = canvas.toDataURL('image/png')
    a.click()
  }, [name])

  return (
    <>
      <p className="page-heading">
        Certificate Generator &nbsp;·&nbsp; Cyber Hygiene Program 2026
      </p>

      {/* ── Form ─────────────────────────────────────────────── */}
      <div className="form-panel">
        <div className="form-group">
          <label htmlFor="participantId">Participant ID No.</label>
          <input
            id="participantId"
            type="text"
            placeholder="e.g. 23AG0012"
            maxLength={30}
            value={participantId}
            onChange={e => setParticipantId(e.target.value)}
            // onKeyDown={e => e.key === 'Enter' && document.getElementById('recipientName').focus()}
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="recipientName">Participant Name</label>
          <input
            id="recipientName"
            type="text"
            placeholder="e.g. Rahul Sharma"
            maxLength={60}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div> */}

        <button className="btn-generate" onClick={() => {}}>
          Generate Certificate
        </button>
      </div>

      {/* ── Certificate ──────────────────────────────────────── */}
      <Certificate
        ref={certRef}
        participantId={participantId}
        handleDownload ={handleDownload}
      />

      
    </>
  )
}
