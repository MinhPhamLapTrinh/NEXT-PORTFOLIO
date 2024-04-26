export default function Footer() {
  const today = new Date();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-24 mt-10">
        <span>&copy; {today.getFullYear()} Duc Minh Pham </span>
        <span>All rights reserved.</span>
      </div>
    </>
  );
}
