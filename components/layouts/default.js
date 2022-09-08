export default function Layout({ children }) {
  return (
    <>
      <main className="flex flex-col max-w-screen-2xl mx-auto p-4 font-sans">{children}</main>
    </>
  )
}