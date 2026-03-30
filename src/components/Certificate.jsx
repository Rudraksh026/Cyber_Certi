import { forwardRef } from "react";
import gbpantLogo from "../assets/gbpant_logo.png";
import alumniLogo from "../assets/alumni_logo.jpg";

const CERT_NO = "001";

const Certificate = forwardRef(({ participantId,handleDownload }, ref) => {
  const hasId = participantId.trim().length > 0;

  const data = [
  {"certiNo": 1, "Name": "Rudraksh", "Id": 62612},  {"certiNo": 2, "Name": "SHIVESH SINGH SENGAR", "Id": 62810},  {"certiNo": 3, "Name": "Kanishka Budhlakoti", "Id": 63608},  {"certiNo": 4, "Name": "Nilesh Kumar", "Id": 64221},  {"certiNo": 5, "Name": "B.R. VASAVI DEVI", "Id": 61207},  {"certiNo": 6, "Name": "Vaishali belwal", "Id": 63168},  {"certiNo": 7, "Name": "Akhil Panwar", "Id": 60409},  {"certiNo": 8, "Name": "Divyansh Pandey", "Id": 64126},  {"certiNo": 9, "Name": "Lokesh Oli", "Id": 62595},  {"certiNo": 10, "Name": "Archita Paliwal", "Id": 63286},  {"certiNo": 11, "Name": "Vaibhav Raj Rathore", "Id": 63427},  {"certiNo": 12, "Name": "Aditya Agarwal", "Id": 64193},  {"certiNo": 13, "Name": "Himanshu Nautiyal", "Id": 63431},  {"certiNo": 14, "Name": "Sumant Vats", "Id": 63265},  {"certiNo": 15, "Name": "Aman Singh Kohli", "Id": 64416},  {"certiNo": 16, "Name": "Ishita chandra", "Id": 64412},  {"certiNo": 17, "Name": "Faiz Ansari", "Id": 63430},  {"certiNo": 18, "Name": "Vineet Painuly", "Id": 63393},  {"certiNo": 19, "Name": "Ravi Bhushan", "Id": 62076},  {"certiNo": 20, "Name": "Eshan Upadhyay", "Id": 62948},  {"certiNo": 21, "Name": "Fareed Alam", "Id": 60827},  {"certiNo": 22, "Name": "Kartik kumar", "Id": 63389},  {"certiNo": 23, "Name": "Apoorv Kumar", "Id": 63490},  {"certiNo": 24, "Name": "Pragati Pandey", "Id": 61778},  {"certiNo": 25, "Name": "Saumy Joshi", "Id": 64154},  {"certiNo": 26, "Name": "Harshit Joshi", "Id": 57812},  {"certiNo": 27, "Name": "Mayank pandey", "Id": 62596},  {"certiNo": 28, "Name": "Akshay Kumar", "Id": 63456},  {"certiNo": 29, "Name": "Rachit Bachkheti", "Id": 62914},  {"certiNo": 30, "Name": "Bhavya Pandey", "Id": 62979},  {"certiNo": 31, "Name": "Lakshya Kumar", "Id": 63512},  {"certiNo": 32, "Name": "Vicky Jaiswal", "Id": 64228},  {"certiNo": 33, "Name": "Ashwini Chaturbedi", "Id": 63220},  {"certiNo": 34, "Name": "Ashwani Kumar Yadav", "Id": 49410},  {"certiNo": 35, "Name": "Akash Joshi", "Id": 57379},  {"certiNo": 36, "Name": "Kashish", "Id": 63492},  {"certiNo": 37, "Name": "Aayushi Arya", "Id": 63364},  {"certiNo": 38, "Name": "Riha", "Id": 63476},  {"certiNo": 39, "Name": "Shradha", "Id": 64260},  {"certiNo": 40, "Name": "Nandini Chauhan", "Id": 63534},  {"certiNo": 41, "Name": "Meatrika Raturi", "Id": 64183},  {"certiNo": 42, "Name": "Rahul Rawat", "Id": 59938},  {"certiNo": 43, "Name": "Gaurav Sanwal", "Id": 59865},  {"certiNo": 44, "Name": "Kavya Joshi", "Id": 63264},  {"certiNo": 45, "Name": "Vaishnavi", "Id": 63480},  {"certiNo": 46, "Name": "Neetu", "Id": 63511},  {"certiNo": 47, "Name": "Himanshu", "Id": 63584},  {"certiNo": 48, "Name": "Kirtan Napalchyal", "Id": 64397},  {"certiNo": 49, "Name": "Mahak Gangwar", "Id": 63926},  {"certiNo": 50, "Name": "Kakul Sagar", "Id": 63920},  {"certiNo": 51, "Name": "Sarthak", "Id": 63503},  {"certiNo": 52, "Name": "Aakash Kumar", "Id": 62631},  {"certiNo": 53, "Name": "Deepanshu Paliwal", "Id": 63454},  {"certiNo": 54, "Name": "Akshay Rawat", "Id": 63436},  {"certiNo": 55, "Name": "Kapil Kanyal", "Id": 63380},  {"certiNo": 56, "Name": "Kartik Negi", "Id": 63551},  {"certiNo": 57, "Name": "Deerghayn", "Id": 63301},  {"certiNo": 58, "Name": "Kartik Sharma", "Id": 63523},  {"certiNo": 59, "Name": "Sumit Kumar", "Id": 62791},  {"certiNo": 60, "Name": "Saurabh Kumar Yadav", "Id": 62111},  {"certiNo": 61, "Name": "Dibyanshu Bhatt", "Id": 58903},  {"certiNo": 62, "Name": "Shreya Bisht", "Id": 59436},  {"certiNo": 63, "Name": "Deepanshu Devtalla", "Id": 60902},  {"certiNo": 64, "Name": "Kalpana Choudhary", "Id": 61760},  {"certiNo": 65, "Name": "Rishi Raj", "Id": 63462},  {"certiNo": 66, "Name": "Harshit", "Id": 64223},  {"certiNo": 67, "Name": "Rishi Chandra", "Id": 63328},  {"certiNo": 68, "Name": "Yashwardhan Joshi", "Id": 64205},  {"certiNo": 69, "Name": "Rachit Yadav", "Id": 64205},  {"certiNo": 70, "Name": "Ujjwal Dharwal", "Id": 64410},  {"certiNo": 71, "Name": "Mohammad Kaif", "Id": 64333},  {"certiNo": 72, "Name": "Abhishek Yadav", "Id": 64163},  {"certiNo": 73, "Name": "Anjali Tiwari", "Id": 64155},  {"certiNo": 74, "Name": "Manvi", "Id": 64195},  {"certiNo": 75, "Name": "Divya Lohumi", "Id": 63279},  {"certiNo": 76, "Name": "Smita Kohli", "Id": 63368},  {"certiNo": 77, "Name": "Suhani Matwal", "Id": 63529},  {"certiNo": 78, "Name": "Avriti", "Id": 63331},  {"certiNo": 79, "Name": "Lakshya Pandey", "Id": 62637},  {"certiNo": 80, "Name": "Sandeep", "Id": 62642},  {"certiNo": 81, "Name": "Siddarth Singh Baghal", "Id": 63080},  {"certiNo": 82, "Name": "Nandini Agnihotri", "Id": 64579},  {"certiNo": 83, "Name": "Rajat Parashar Pandey", "Id": 64337},  {"certiNo": 84, "Name": "Shailee Mathpal", "Id": 64364}, {"certiNo": 85, "Name": "Ashmita chauhan", "Id": 49947}, {"certiNo": 86, "Name": "Parthvi Singh", "Id": 49947}
]


  const isValid = data.some(
    (entry) => entry.Id === parseInt(participantId)
  );
  const isBlurred = isValid ? false : true;

  let value = {
  certiNo: 0,
  Name: "Participant Name",
  Id: 0
  }

  value = data.find(
    (entry) => entry.Id === parseInt(participantId)
  ) == undefined ? value : data.find(
    (entry) => entry.Id === parseInt(participantId)
  );


  return (
    <div>
      <div className="cert-wrap">
        {/* Blur overlay hint */}
        <div className={`blur-hint${!isValid ? " visible" : ""}`}>
          <div className="blur-hint-text">
            Enter Participant ID &amp; Name
            <br />
            to generate the certificate
          </div>
        </div>

        {/* Certificate */}
        <div
          ref={ref}
          id="certificate"
          className={`certificate${isBlurred ? " is-blurred" : " is-focused"}`}
        >
          <div className="cert-bg-mesh" />
          <div className="side-panel left" />
          <div className="side-panel right" />
          <div className="top-bar" />

          <div className="cert-inner">
            {/* Certificate Number — constant */}
            <div className="cert-no-bar">
              <span className="cert-no-label">
                Certificate No.&nbsp;:&nbsp;
              </span>
              <span className="cert-no-value">4A/CSS/2026/{value.certiNo}</span>
            </div>
    
            {/* Header */}
            <div className="cert-header">
              {/* Left — GB Pant */}
              <div className="org-block">
                <img
                  src={gbpantLogo}
                  className="org-logo"
                  alt="GB Pant University Logo"
                />
                <div className="org-text">
                  GB PANT UNIVERSITY
                  <br />
                  OF AGRICULTURE &amp;
                  <br />
                  TECHNOLOGY,
                  <br />
                  PANTNAGAR
                </div>
              </div>

              {/* Right — 4A Alumni */}
              <div className="org-block right">
                <img
                  src={alumniLogo}
                  className="org-logo"
                  alt="Alumni Alma Mater Advancement Association Logo"
                />
                <div className="org-text">
                  ALUMNI
                  <br />
                  ALMA MATER
                  <br />
                  ADVANCEMENT
                  <br />
                  ASSOCIATION (4A)
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="cert-title-wrap">
              <h1 className="cert-title">Certificate of Participation</h1>
            </div>
            <span className="ornament">⁓ &nbsp; ❧ &nbsp; ⁓</span>

            {/* Body */}
            <div className="cert-body">
              <p>
                This is to certify that&nbsp;
                <span className={`name-slot filled`}>
                  {value.Name === 0 ? "Participant Name" : value.Name}
                </span>
                &nbsp;(ID:&nbsp;
                <span className={`id-slot${hasId ? " filled" : ""}`}>
                 {value.Id === 0 ? "Participant ID" : value.Id}
                </span>
                )&nbsp;has actively participated in the Cyber Security
                Sensitization Program on the topic{" "}
                <strong>"Cyber Hygiene"</strong> held on{" "}
                <strong>28th March 2026</strong> at the Multipurpose Complex,
                Pantnagar.
              </p>
              <p>
                The program aimed to spread awareness about safe and responsible
                digital practices, and your participation contributed to making
                the event a success.
              </p>
              <p>
                We appreciate your enthusiasm and interest in learning about
                cyber safety and wish you continued success in your future
                endeavors.
              </p>
            </div>

            {/* Signature */}
            <div className="cert-footer">
              <div className="signature-img">Anil Kumar</div>
              <div className="sig-divider" />
              <div className="sig-name">Dr. Anil Kumar</div>
              <div className="sig-role">
                Chief Coordinator and Secretary, 4A
                <br />
                Pantnagar
              </div>
            </div>
          </div>
          {/* /cert-inner */}
          <div className="bottom-bar" />
        </div>
        {/* /certificate */}
      </div>

      {/* ── Download ─────────────────────────────────────────── */}
      <div className="actions">
        <button className={`btn-action`} disabled={isBlurred} onClick={handleDownload}>
          ⬇ Download PNG
        </button>
      </div>
    </div>
  );
});

Certificate.displayName = "Certificate";
export default Certificate;
