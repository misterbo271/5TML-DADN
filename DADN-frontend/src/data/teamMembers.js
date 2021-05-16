import { faCalendarCheck, faComment } from "@fortawesome/free-solid-svg-icons";

import Profile1 from "../assets/img/team/man.jpeg";
import Profile2 from "../assets/img/team/123456.jpeg";
import Profile3 from "../assets/img/team/loc.jpeg";
import Profile4 from "../assets/img/team/luan.jpeg";
import Profile5 from "../assets/img/team/luc.jpeg";

export default [
  {
    id: 1,
    image: Profile1,
    name: "Doan Sinh Man",
    statusKey: "online",
    icon: faCalendarCheck,
    btnText: "Invite",
  },
  {
    id: 2,
    image: Profile2,
    name: "Pham Vo Mien",
    statusKey: "inMeeting",
    icon: faComment,
    btnText: "Message",
  },
  {
    id: 3,
    image: Profile3,
    name: "Truong Thanh Loc",
    statusKey: "offline",
    icon: faCalendarCheck,
    btnText: "Invite",
  },
  {
    id: 4,
    image: Profile4,
    name: "Nguyen Luan",
    statusKey: "online",
    icon: faComment,
    btnText: "Message",
  },
  {
    id: 4,
    image: Profile5,
    name: "Nguyen Van Quyen Luc",
    statusKey: "online",
    icon: faComment,
    btnText: "Message",
  },
];
