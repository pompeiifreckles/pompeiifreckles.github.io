import React from 'react'

import Blog_1 from '../Blogs/C_ErrorHandling' 
import CustomBlog from '../Components/CustomBlog'

function BlogsScreen() {
    return (
        <div style={containerStyle}>

            <Blog_1 />

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
    // gap: '7vh'
    // justifyContent: 'space-between',
}

export default BlogsScreen