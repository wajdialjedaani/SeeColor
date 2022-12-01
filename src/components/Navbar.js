import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import '@mui/icons-material/DeleteOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
//import { Button } from './Button';
//import Home from './pages/Home.js';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
    } else {
        setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
// Help Menu
  const [openHelp, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleCloseDiag = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (openHelp) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openHelp]);
// Background Menu
  const [openBackground, setBack] = React.useState(false);
  const [scrollBack, setScrollBack] = React.useState('background');
  const handleClickBack = (scrollType) => () => {
    setBack(true);
    setScrollBack(scrollType);
  };
  const handleCloseBack = () => {
    setBack(false);
  };
  React.useEffect(() => {
    if (openBackground) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openBackground]);
// Link Menu
  const [openLinks, setLink] = React.useState(false);
  const [scrollLink, setScrollLink] = React.useState('links');
  const handleClickLink = (scrollType) => () => {
    setLink(true);
    setScrollLink(scrollType);
  };
  const handleCloseLink = () => {
    setLink(false);
  };
  React.useEffect(() => {
    if (openLinks) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openLinks]);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    SeeColor <i className='fab fa-typeo3'/>
                </Link>
                <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick1}
                >
                    <InfoOutlinedIcon 
                    fontSize="large"
                    focusable="true"
                    />
                </Button>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={handleClickOpen('paper')}>
                        Results Help
                    </MenuItem>
                        <Dialog
                            open={openHelp}
                            onClose={handleCloseDiag}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">Results Help</DialogTitle>
                            <DialogContent dividers={scroll === 'paper'}>
                            <DialogContentText
                                id="scroll-dialog-description"
                                ref={descriptionElementRef}
                                tabIndex={-1}
                            >
                            <h3>Monochromacy:</h3>
                            <p>People with this condition cannot distinguish colour at all. This condition is very rare.</p>
                            <h3>Dichromacy:</h3>
                            <p>People with this condition can tell some colours apart, but are not able to distinguish certain hues. Dichromacy is split into Protanopia (red), Deuteranopia (green), and Tritanopia (blue). Although each of those are focused mainly on one colours, they all change the way every colour looks, and certain hues can be hard or impossible to tell apart. Protanopia and Deuteranopia cause trouble with reds, greens, and yellows. Tritanopia causes trouble with blues and yellows.</p>
                            <h3>Anomalous Trichromacy:</h3>
                            <p>This condition is split into Tritanomaly, Protanomaly, and Deuteranomaly. Trichromats can still have difficulty distinguishing colour, but not as much as dichromats. This condition can range from very mild to severe. </p>
                            </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    <MenuItem onClick={handleClickBack('background')}>
                        Background
                    </MenuItem>
                        <Dialog
                            open={openBackground}
                            onClose={handleCloseBack}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">Background</DialogTitle>
                            <DialogContent dividers={scroll === 'background'}>
                            <DialogContentText
                                id="scroll-dialog-description"
                                ref={descriptionElementRef}
                                tabIndex={-1}
                            >
                                <p>The goal of this project is to provide a solution to an issue with media such as posters, images, and graphics being inaccessible to colour blind people. A team member’s parent and friend are color blind and we were inspired by the demonstrated project on poster accessibility. We decided to improve upon it, providing a quick solution to checking the color blind accessibility to graphics, posters, and other media. </p>
                                <p>This is our implementation of a web application where all can upload an image and our application will scan it and report how accessible the image is for different types of color-blindess, based on user testing. Our application will give the image a rating for Monochromacy and the three variations of Dichromacy. It will also explain how to improve the ratings for each, and link to background information on colour blindness. </p>
                            </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    <MenuItem onClick={handleClickLink('links')}>
                        Research Links
                    </MenuItem>
                        <Dialog
                            open={openLinks}
                            onClose={handleCloseLink}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">Research Links</DialogTitle>
                            <DialogContent dividers={scroll === 'links'}>
                            <DialogContentText
                                id="scroll-dialog-description"
                                ref={descriptionElementRef}
                                tabIndex={-1}
                            > 
                            <ul>
                                <li><a alt="Chicago Medicine Colour Blindness information" href="https://chicago.medicine.uic.edu/departments/academic-departments/ophthalmology-visual-sciences/our-department/media-center/eye-facts/color-blindness/">Chicago Medicine UIC</a></li>
                                <li><a alt="URMC Colour Blindness information" href="https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=134&contentid=526">URMC Rochester</a></li>
                                <li><a alt="SUNY Colour Blindness information" href="https://www.sunyopt.edu/news/what-it-means-to-be-color-blind-and-what-you-can-do-about-it/">Sunyopt</a></li>
                                <li><a alt="Colour Contrast Checker" href="https://contrastchecker.com/">Contrast Checker</a></li>
                                <li><a alt="Web Aim Colour Contrast Checker" href="https://webaim.org/resources/contrastchecker/">WebAIM Contrast Checker</a></li>
                            </ul>
                            </DialogContentText>
                            </DialogContent>
                        </Dialog>
                </Menu>
            </div>
        </nav>
    </>
  )
}

export default Navbar

/*
                <Dialog
                            open={open}
                            onClose={handleCloseDiag}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                            >
                                Close
                            </IconButton>
                            <DialogContent dividers={scroll === 'paper'}>
                            <DialogContentText
                                id="scroll-dialog-description"
                                ref={descriptionElementRef}
                                tabIndex={-1}
                            >
                                Cras mattis consectetur purus sit amet fermentum.
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                            </DialogContentText>
                            </DialogContent>
                        </Dialog>
                */