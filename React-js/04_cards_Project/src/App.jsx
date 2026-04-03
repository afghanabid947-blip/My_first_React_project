import React from "react";
import Cards from "./components/cards";
import cards from "./components/cards";
const jobs = [
  {
    brandLogo:
      "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
    companyName: "Meta",
    postedDate: "2 days ago",
    role: "UI Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$65/hr",
    location: "Pakistan, Islamabad",
  },
  {
    brandLogo:
      "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    companyName: "Apple",
    role: "Full Stack Developer",

    postedDate: "5 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$50/hr",
    location: "Pakistan, Lahore",
  },
  {
    brandLogo:
      "https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg",
    companyName: "Amazon",
    postedDate: "1 day ago",
    role: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$58/hr",
    location: "Pakistan, Karachi",
  },
  {
    brandLogo:
      "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
    companyName: "Netflix",
    postedDate: "7 days ago",
    role: "UX Designer",
    tag1: "Remote",
    tag2: "Senior Level",
    payPerHour: "$70/hr",
    location: "Remote",
  },
  {
    brandLogo:
      "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
    companyName: "Google",
    role: "Frontend Developer",
    postedDate: "3 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$55/hr",
    location: "Pakistan, Islamabad",
  },
  {
    brandLogo:
      "https://i.pinimg.com/1200x/08/48/58/084858e17760cdcf8eccb77c6554f978.jpg",
    companyName: "Microsoft",
    postedDate: "4 days ago",
    role: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$62/hr",
    location: "Pakistan, Rawalpindi",
  },
  {
    brandLogo:
      "https://i.pinimg.com/1200x/df/00/b1/df00b1d8590dba5b570420e96809b5c6.jpg",
    companyName: "Tesla",
    postedDate: "6 days ago",
    role: "React Developer",
    tag1: "Internship",
    tag2: "Junior Level",
    payPerHour: "$35/hr",
    location: "Pakistan, Faisalabad",
  },
  {
    brandLogo:
      "https://i.pinimg.com/1200x/55/4f/68/554f682b3b9f1281542e7951283f2829.jpg",
    companyName: "NVIDIA",
    postedDate: "8 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$68/hr",
    location: "Pakistan, Lahore",
  },
  {
    brandLogo:
      "https://i.pinimg.com/736x/9e/ab/c5/9eabc54fbe3cd7a6931695dcce52cc82.jpg",
    companyName: "Adobe",
    postedDate: "10 days ago",
    tag1: "Part Time",
    tag2: "Mid Level",
    role: "Software Engineer",
    payPerHour: "$57/hr",
    location: "Pakistan, Islamabad",
  },
  {
    brandLogo:
      "https://i.pinimg.com/1200x/30/8c/4d/308c4d27a6c6e95401c6d0a854c99e79.jpg",
    companyName: "Oracle",
    postedDate: "12 days ago",
    role: "Web Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$60/hr",
    location: "Pakistan, Karachi",
  },
];
function App() {
  return (
    <div className="parents">
      {jobs.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Cards
              company={elem.companyName}
              brandlogo={elem.brandLogo}
              postdate={elem.postedDate}
              tag1={elem.tag1}
              tag2={elem.tag2}
              payPerHour={elem.payPerHour}
              location={elem.location}
              role={elem.role}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
