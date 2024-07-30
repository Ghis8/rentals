'use client'
import { navBarItems } from '@/constants'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { MdOutlineMenu } from "react-icons/md";

export class NavBar extends Component {
  constructor(props:any){
    super(props)
    this.state={

    }
  }
  static propTypes = {

  }
  static defaultProps={

  }
  
  render() {
    return (
      <section className='flex items-center justify-between px-5 w-screen py-3'>
        <h1 className='text-black hidden md:block lg:block'>Rentals</h1>
        <MdOutlineMenu
          color='white'
          className='lg:hidden md:hidden block w-8 h-8 md:w-10 md:h-10'
        />
        <div className='flex items-center gap-5 md:gap-10'>
          <div className='md:flex lg:flex items-center gap-5 hidden'>
            {
              navBarItems.map((navItem,index)=>(
                <Link 
                  key={navItem.id}
                  href='/'
                  className=''
                >
                  {navItem.name}
                </Link>
              ))
            }
          </div>
          <span className='md:hidden lg:hidden block'>Rentals</span>
          <button
            className='py-2 px-1 text-xs bg-blue-600 text-center md:py-3 md:px-5 rounded-md' 
          >Get Started</button>
        </div>
      </section>
    )
  }
}

export default NavBar