import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';

interface HeaderProps {
	children: any;
}
// Компонент Header
const Header: React.FC<HeaderProps> = ({ children }) => {
	return (
		<Box sx={{ flexGrow: 1, height: '80px', width: '100%' }}>
			<AppBar
				sx={{ backgroundColor: '#FFE44D', color: 'black' }}
				position='static'>
				<Toolbar>
					<NavLink to='/'>{'logo'}</NavLink>
					<Box sx={{ flexGrow: 1 }} />{' '}
					{/* Расширяем пространство между логотипом и иконками */}
					{children}
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton size='large' sx={{ color: 'black' }}>
							<Badge>
								<NavLink to='/favorite'>
									<LocalMallIcon />
								</NavLink>
							</Badge>
						</IconButton>
						<IconButton
							size='large'
							edge='end'
							aria-label='account of current user'
							aria-haspopup='true'
							sx={{ color: 'black' }}>
							<NavLink to='/profile'>
								<AccountCircle />
							</NavLink>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
