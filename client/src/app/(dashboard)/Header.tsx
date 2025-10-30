import React from 'react'

const Header = ({ title, subtitle, rightElement }: HeaderProps) => {
    return (
        <div className='header'>
            <div>
                <h1 className='header__title'>{title}</h1>
                {subtitle && <p className='header__subtitle'>{subtitle}</p>}
            </div>
            <div>
                {rightElement && <div>{rightElement}</div>}
            </div>
        </div>
    )
}

export default Header