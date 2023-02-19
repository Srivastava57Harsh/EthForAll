import Menu from '@/components/menu/Menu';
import Card from '@/components/cards/cards';
import Web3Modal from 'web3modal';
import { providers, Contract } from 'ethers';
import { useState, useEffect, useRef } from 'react';
import { CONTRACT_ADDRESS, abi } from '../constants';
import Link from 'next/link';

export default function Home() {
  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    console.log(web3ModalRef);
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const network = await web3Provider.getNetwork();
    if (network.chainId !== 5) {
      window.alert('Change your network to goerli testnet');
      throw new Error('Change to goerli testnet');
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const allProjects = async () => {
    try {
      const provider = await getProviderOrSigner();
      const contract = new Contract(CONTRACT_ADDRESS, abi, provider);
      const projID = await contract.receiveProjectid();
      console.log(projID._hex);
      let projectInfo = [];
      for (let i = 0; i < projID; i++) {
        const project = await contract.projectlist(i);

        projectInfo.push(project);
      }
      console.log(projectInfo);
      return projectInfo;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: 'goerli',
      providerOptions: {},
      disableInjectedProvider: false,
    });
    const data = allProjects();
  }, []);

  return (
    <>
      <Menu />
      <div className="flex w-full justify-center items-center flex-wrap">
        <Link href="/shecab" className="h-[80%]">
          <Card
            description="On our web-application, a female customer can find a cab to her destination and get a cab with female driver.
          It increases the saftey measures for women and allow them to travel safely. Also, a female driver can get her
          ride and earn money."
            name="She Cab"
            src="https://images.unsplash.com/photo-1675806963317-6fbf3b6d61ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80"
          />
        </Link>

        <Link href="/votechain" className="h-[80%]">
          <Card description="A decentralized voting platform" name="VoteChain" />
        </Link>
      </div>
    </>
  );
}
