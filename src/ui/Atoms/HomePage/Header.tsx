import React from 'react'

interface HeaderAtomProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
}

const HeaderAtom = ({
    className,
    ...props
}: HeaderAtomProps) => {
    return (
        <header
            className={className}
            {...props}
        />
    )
}

export default HeaderAtom