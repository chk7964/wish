
export default function Home() {
 return (
  <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
   <link rel="stylesheet" href="headfoot.css" />
   <div className="header">
  <p><a href="./">Tools Font Basket</a></p>
</div>

<div className="scrollmenu">
  <div className="menu">
  <a href="./">Home</a>
  <a href="./chrishtmas">Chrishtmas Wish</a>
  <a href="./">Fancy Text</a>

</div>
</div>

 <div className='mx-auto'>
 <table className="border-separate border-spacing-2 border border-slate-400 table-auto w-full">
  <thead>
    <tr>
      <th className="">State</th>
      <th className="">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="">Indiana</td>
      <td className="">Indianapolis</td>
    </tr>
    <tr>
      <td className="">Ohio</td>
      <td className="">Columbus</td>
    </tr>
    <tr>
      <td className="">Michigan</td>
      <td className="">Detroit</td>
    </tr>
  </tbody>
</table>


    




  </div>

  <div className="footer">
  <div className="fmenu">
  <a href="#">Home</a>
  <a href="#">About Us</a>
  <a href="#">Contact Us</a>
  <a href="#">Privacy Policy</a>
</div>
  <p>Copyright &copy; <b>{new Date().getFullYear()}</b> Your Name All Rights Reserved</p>
</div>

     </>
 )
}