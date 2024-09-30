import AnotherComp from "./AnotherComp"


export default function App() {
  const name = "Mohan S G"
  const place = "Tnj"
  const work = "Student"
  const company = "GUVI GEEKS"
  return (
    <>
    <div className="h-screen flex items-center justify-center bg-slate-200 ">
      <h1 className="p-14 border-2 border-blue-500 ">
        <AnotherComp name={name} place={place} work={work} company={company} />
      </h1>
      </div>
    </>
  )
}