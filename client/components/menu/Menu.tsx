import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import useArcanaAuth from '../../helper/useArcanaAuth';
import { ColorRing } from 'react-loader-spinner';
import { FcGoogle } from 'react-icons/fc';
import { SiDiscord } from 'react-icons/si';
import { VscGithubInverted } from 'react-icons/vsc';
import { AiOutlineLink, AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Link from 'next/link';
import Social from './socialConnect';

const isActive = (history: any, path: any) => {
  if (history.location.pathname == path) return { color: '#f99085' };
  else return { color: '#efdcd5' };
};
function Menu() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [account, setAccount] = useState('');

  const { initializeAuth, loggedIn, getAccounts, login, loginWithLink, logout, initialized } = useArcanaAuth();

  const initialize = async () => {
    await initializeAuth();
  };

  // const Navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    const loadDetails = async () => {
      if (initialized) {
        if (loggedIn) {
          const acc: any = await getAccounts();
          setAccount(acc[0]);
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
    };
    loadDetails();
  }, [initialized, loggedIn]);

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className="flex flex-row justify-between w-full">
            <div>
              <Link href="/">
                <IconButton aria-label="Home">
                  <HomeIcon />
                </IconButton>
              </Link>
            </div>
            <div>
              <span>
                <a href="/new" className="mx-2">
                  <button
                    className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
                    type="button"
                    // onClick={() => Navigate('/new')}
                  >
                    Add Project
                  </button>
                </a>
              </span>
              <span>
                {/* {!auth.isAuthenticated() && ( */}
                <span>
                  {loggedIn == false ? (
                    <button
                      className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
                      type="button"
                      onClick={() => setShowModal(true)}
                    >
                      <span className="pr-3">
                        <AiOutlineLink />
                      </span>
                      Join
                    </button>
                  ) : (
                    <button
                      className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
                      type="button"
                      onClick={() => setShowModal(true)}
                    >
                      <span className="pr-3">
                        <AiOutlineLink />
                      </span>
                      {account.slice(0, 10) + '...'}
                    </button>
                  )}
                </span>
              </span>
            </div>
          </div>
        </Toolbar>
        {showModal ? (
          <div className="absolute flex justify-center items-center w-screen h-screen bg-black/50">
            <div className="z-20 bg-gray-800 w-96 rounded-lg">
              <div className="font-semibold flex justify-between items-center px-10 py-5">
                <span>Connect With Socials</span>
                <span onClick={() => setShowModal(false)} className="hover:cursor-pointer p-2 h-full">
                  <AiOutlineClose className="h-full" />
                </span>
              </div>
              <hr className="w-full" />
              <div className="text-sm flex justify-between items-center px-10 py-5">
                <span>Connect with one of our available Social platforms.</span>
              </div>
              <div className="pb-5">
                <Social
                  icon={FcGoogle}
                  handle="Google"
                  func={() => {
                    login('google');
                    setShowModal(false);
                  }}
                />
                <Social
                  icon={VscGithubInverted}
                  handle="Github"
                  func={() => {
                    login('github');
                    setShowModal(false);
                  }}
                />
                <Social
                  icon={SiDiscord}
                  handle="Discord"
                  func={() => {
                    login('discord');
                    setShowModal(false);
                  }}
                />
              </div>
            </div>
          </div>
        ) : null}
      </AppBar>

      {/* <div className="container">
        <h1>AUTHENTICATION</h1>
        <div>
          {loading ? (
            <div className="loading">
              <ColorRing
                visible={true}
                height="100"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                // colors={['#000000']}
              />
            </div>
          ) : !loading && loggedIn ? (
            <div>
              <h2 className="sub-heading">Logged In</h2>
              <h3>Welcome {account}</h3>
              <h3>you're logged in successfully.</h3>
              <button className="big-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="box">
              <h2 className="sub-heading">Select a login</h2>
              <div className="options">
                <button className="big-button" onClick={() => login('google')}>
                  Google Login
                </button>
                <button className="big-button" onClick={() => login('twitch')}>
                  Twitch Login
                </button>
                <button className="big-button" onClick={() => login('discord')}>
                  Discord Login
                </button>
                <button className="big-button" onClick={() => login('twitter')}>
                  Twitter Login
                </button>
                <button className="big-button" onClick={() => login('github')}>
                  Github Login
                </button>
              </div>
              <div className="form">
                <input value={email} type="text" placeholder="Enter email" onChange={handleEmailChange} />
                <button className="big-button" onClick={() => loginWithLink(email)}>
                  Login with link
                </button>
              </div>
            </div>
          )}
        </div>
      </div> */}
    </>
  );
}

export default Menu;
