import React from "react";
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineCustomerService, AiOutlineLogin } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Header() {
    const navlinks =
    <>
    <li><a> <AiOutlineHome /> Home</a></li>

    <li> <NavLink to='/addProduct'><AiOutlineCustomerService /> Add Product</NavLink> </li>
    
    <li><a> <AiOutlineShoppingCart /> My Cart</a></li>
    <li><a> <AiOutlineLogin /> Login</a></li>
    </>
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navlinks}
						
					</ul>
				</div>
				<div className="flex gap-3 items-center">
                    <img className="w-12 h-12" src="https://i.ibb.co/54qQHmY/shop-logo-removebg-preview.png" alt="" />
                    <span>SAMI SHOP</span>
                </div>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
                {navlinks}
					
				</ul>
			</div>
			<div className="navbar-end">
				<a className="btn">Button</a>
			</div>
		</div>
	);
}
