import React from "react";
import Link from "next/link";

const Navbar = props => {
  console.log(props);
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/admin/admin">
        <a>Admin</a>
      </Link>
    </div>
  );
};

export default Navbar;
