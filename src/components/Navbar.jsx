import { Link } from '@mui/material';
import React from 'react';

// Logo 
import Logo from "../images/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import PieChartIcon from '@mui/icons-material/PieChart';
import FolderIcon from '@mui/icons-material/Folder';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={Logo} alt="FinX Logo" />
            </div>
            <hr />
            <nav>
                <ul>
                    <li>
                        <Link ><HomeIcon /> Home</Link>
                    </li>
                    <li>
                        <Link ><PieChartIcon />Transactions</Link>
                    </li>
                    <li>
                        <Link ><FolderIcon />Portfolio</Link>
                    </li>
                    <li>
                        <Link ><AccountBalanceWalletIcon /> Wallet</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <div className='logout'>
                <Link><HelpOutlineIcon /> Help</Link>
                <Link><LogoutOutlinedIcon /> Logout</Link>
            </div>

        </div>
    )
}

export default Navbar