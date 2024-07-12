'use client'
import { navBarItems } from '@/constants'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

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
        <h1 className='text-white'>Rentals</h1>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-5'>
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
          <button
            className='py-3 bg-blue-600 text-center w-[25%] rounded-md' 
          >Get Started</button>
        </div>
      </section>
    )
  }
}

export default NavBar