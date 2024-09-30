import Profile from "./Components/Profile"

const App = () => {
  const profiles = [
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
    {
      name: "Mohan S G",
      work: "Student",
      pic: "https://picsum.photos/200?random=",
    },
  ];
  const profile = {
   name : "Mohan S G",
   work : "Student",
   pic : "https://picsum.photos/200?random=",
  }
   
  return (
     <>
    <div className="flex  flex-wrap items-center justify-around text-3xl h-screen border-4 border-green-400 conatinermx-auto bg-green-50 p-7 overflow-scroll gap-8 ml-12 mr-12 m-12">
        {profiles.map((profile,ind) => (
       <Profile key={ind} name={profile.name} work={profile.work} profilePic={profile.pic}/>
     ))}
    </div>
    <div className="flex items-center justify-around text-3xl h-screen border-4 border-blue-400 conatiner mx-auto bg-blue-50 overflow-scroll gap-8 ml-12 mr-12 m-12">
      <Profile name={profile.name} work={profile.work} profilePic={profile.pic} />
      </div>
      </>
  )
 
 }
export default App