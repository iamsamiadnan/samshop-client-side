import React, { useContext } from "react";
import {
	AiOutlineHome,
	AiOutlineShoppingCart,
	AiOutlineCustomerService,
	AiOutlineLogin,
	AiOutlineLogout,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

export default function Header() {
	const { user, signOutUser } = useContext(AuthContext);

	const handleSignOut = () => {
		signOutUser()
			.then((res) => {
				toast.success("Signed Out!");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const navlinks = (
		<>
			<div className="flex gap-2 items-center">
				<li>
					
					<NavLink to="/">
						<AiOutlineHome /> Home
					</NavLink>
				</li>

				<li>
					
					<NavLink to="/addProduct">
						<AiOutlineCustomerService /> Add Product
					</NavLink>
				</li>

				<li>
					<NavLink to="/cart">
						<AiOutlineShoppingCart /> My Cart
					</NavLink>
				</li>

		
				
					{user && <div className="flex gap-2 items-center border border-blue-500 rounded p-2"><span>{user.displayName}</span> 
					
					
					<div className="avatar online"><div className="w-6 rounded-full border border-blue-500"><img src={user.photoURL} /></div></div>
					</div>
					
					}
			
		
				{user ? (
					<li>
						<button onClick={handleSignOut}>
							<AiOutlineLogout /> Sign Out
						</button>
					</li>
				) : (
					<li>
						<NavLink to="/signin">
							<AiOutlineLogin /> Sign In
						</NavLink>
					</li>
				)}
			</div>
		</>
	);

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
				<NavLink
					to="/"
					className="flex gap-3 items-center hover:backdrop-brightness-75 rounded p-2"
				>
					<img
						className="w-12 h-12"
						src="https://i.ibb.co/54qQHmY/shop-logo-removebg-preview.png"
						alt=""
					/>
					<span>SAMI SHOP</span>
				</NavLink>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navlinks}</ul>
			</div>
		</div>
	);
}
