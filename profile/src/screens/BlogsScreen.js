import React from 'react'

import CustomBlog from '../Components/CustomBlog'

function BlogsScreen() {
    return (
        <div style={containerStyle}>

            <CustomBlog title="Custom title">
                <p>
                    This is some random text here and this means it is successful
                </p>
                <p>
                    This is some random text here and this means it is successful
                </p>
            </CustomBlog>
            <CustomBlog />
            <CustomBlog />

        </div>
    )
}

const containerStyle = {
    width: '50%', 
    margin: 'auto', 
    // backgroundColor: 'orange',
    display: 'flex',
    flexDirection: 'column',
    gap: '50px'
}

export default BlogsScreen