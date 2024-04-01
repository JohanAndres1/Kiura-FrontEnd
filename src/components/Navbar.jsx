import Button from "./Button";

const LogoIcon = () => (
  <svg className="size-7" width="128" height="128" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M6 22q-1.25 0-2.125-.875T3 19v-1q0-.825.588-1.412T5 16h1V4q0-.825.588-1.412T8 2h11q.825 0 1.413.588T21 4v15q0 1.25-.875 2.125T18 22zm12-2q.425 0 .713-.288T19 19V4H8v12h7q.825 0 1.413.588T17 18v1q0 .425.288.713T18 20M10 9q-.425 0-.712-.288T9 8q0-.425.288-.712T10 7h7q.425 0 .713.288T18 8q0 .425-.288.713T17 9zm0 3q-.425 0-.712-.288T9 11q0-.425.288-.712T10 10h7q.425 0 .713.288T18 11q0 .425-.288.713T17 12zm-4 8h9v-2H5v1q0 .425.288.713T6 20m0 0H5h10z"
    />
  </svg>
);
function BuscarIcon({ className }) {
  return (
    <svg className={className} width="128" height="128" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
      />
    </svg>
  );
}

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 h-[4.5rem]">
      <div className="px-5 flex items-center gap-2 text-textButton font-bold">
        <LogoIcon />
        <a href="/">LookingTalent</a>
      </div>
      <div className="flex">
        <Button href={'/'} text={'Home'}/>
        <Button href={'/profesionals'} text={'Profesionals'}/>
       </div>
      <div className="flex gap-x-2 h-11">
        <div className="flex items-center text-black/70 bg-gray-200/80 h-full rounded-xl">
          <BuscarIcon className={'absolute size-6 ml-2'} />
          <input
            className="transition-all pl-10 text-sm bg-transparent outline-0 h-full w-40 active:w-60 focus:w-60 text-black/70"
            placeholder="Search"
          />
        </div>
       <div className="h-full flex">
         <Button href={'/sing-up'} text={'Sign Up'}/>
         <Button href={'/log-in'} text={'Log In'}/>
       </div>
      </div>
    </nav>
  );
}
