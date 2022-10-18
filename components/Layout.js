
export default function Layout({ children }) {
 return (
  <>
   <div className="container mx-auto p-4 shadow-lg m-2  rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
   <main>
    {children}
   </main>
   </div>
  </>
 )
}