import React from 'react'

import CustomBlog from '../Components/CustomBlog'

function Blog_ErrorHandling() {
    return (
        <React.Fragment>
            <CustomBlog title="Debugging in C">
                <p style={{whiteSpace: 'pre-line', marginLeft: '4em'}}>
                {`
                    We know C is awesome and gives you freedom to implement weird memory hacks.
                    But it becomes little difficult when you don't know what went wrong in the program.
                    Error handling is difficult in every language and becomes all the more difficult in C,
                    which does not provide debugging or error handling API built into the language itself.

                    Since C does not always have the privilege of running on a system with complexity of a kernel,
                    therefore providing such API in language itself adds to the pain when porting the language to such system.

                    Additionally one cannot just write printf after every statement in code to check the execution flow
                    while maintaining sanity. Using assert does provide relief but only to a certain length.

                    Tracking the execution in debugger is also not that simple, unless you are sure where the program goes off
                    rail. You have to be twice as clever as when you were writing the code.

                    I was lucky to stumble upon this method when I was starting with C and it was pretty unique solution to the problem.
                    The piece of code was written by Zed Shaw and rightfully named "Zed's Awesome Debug Macros"

                `}</p>
                <div style={{backgroundColor: "#f1f1f1", borderRadius: 10, padding: '0 4em', justifyContent: 'center'}}>
                <code style={styles.comment}>{`
                /* dbg.h */
                `}</code>
<code style={styles.code}>{`
#ifndef __dbg_h__
#define __dbg_h__

#include <stdio.h>
#include <errno.h>
#include <string.h>

#ifndef NDEBUG
#define debug(M, ...)
#else
#define debug(M, ...)   fprintf(stderr, "DEBUG %s: %d:" M "\\n",\\
__FILE__, __LINE__, ##__VA_ARGS__)
#endif

#define clean_errno() (errno==0 ? "None" : strerror(errno))

#define log_err(M, ...) fprintf(stderr,\\
"[ERROR] (%s:%d: errno: %s) " M "\\n", __FILE__, __LINE__, \\
clean_errno(), ##__VA__ARGS__)

#define log_warn(M, ...) fprintf(stderr,\\
"[WARN] (%s:%d: errno: %s) " M "\\n", \\
__FILE__, __LINE__, ##__VA__ARGS__)

#define log_info(M, ...) fprintf(stderr, "[INFO] (%s:%d) " M "\\n", \\
__FILE__, __LINE__, ##__VA_ARGS__)

#define check(A, M, ...) if(!(A)) {\\
log_err(M, ##__VA_ARGS__); errno = 0; goto error;}

#define sentinel(M, ...) {log_err(M, ##__VA_ARGS__);\
errno=0; goto error;}

#define check_mem(A) check((A), "Out of memory.")

#define check_debug(A, M, ...) if(!(A)) {debug(M, ##__VA_ARGS__);\\
errno = 0; goto error;}

#endif

`}
</code>
                </div>

                <p style={{whiteSpace: 'pre-line', marginLeft: '4em'}}>
                {`
                    Since we are dealing with macros there is no added runtime cost and we control the
                    entire implementation for debugging API.
                    This also makes it easier to integrate it into code without tampering with the logic of 
                    the code itself. Moreover this debugging can be turned of during compilation without any 
                    changes in the codebase. 

                    Now let's see how we can use this in our code to make our lives easier.

                `}</p>

                <div style={{backgroundColor: "#f1f1f1", borderRadius: 10, padding: '0 4em', justifyContent: 'center'}}>
                <code style={styles.comment}>{`
                /* main.c */
                `}</code>
<code style={styles.code}>{`
#include <stdio.h>
#include <stdlib.h>

#include "cake_lib.h"
#include "dbg.h"

void make_cake() {
    switch(make_batter()) {
        case 0:
            bake_cake();
            break;
        case 1:
            printf("Ingredients not enough\\n");
            print_recipe("cake_recipe");
            break;
        default:
            sentinel("I shouldn't run");
    }
}

int make_batter() {
    log_info("Adding Eggs");
    int eggs = add_eggs(2);
    check_debug(eggs != 2, "Oops! out of eggs");
    log_info("Adding Butter");
    int butter = add_butter(1);
    check_debug(butter != 1, "Oops! out of butter");
    log_info("Adding Flour");
    int flour = add_flour(2);
    check_debug(flour != 2, "Oops! out of flour");
    log_info("Adding Sugar");
    int sugar = add_sugar(1);
    check_debug(sugar != 1, "Oops! out of sugar");
    log_info("Adding Milk");
    int milk = add_milk(1);
    check_debug(milk != 1, "Oops! out of milk");

    int mix_status = mix();
}

void bake_cake() {
    int oven_status = turn_on_oven();
    check_debug(oven_status == 0, "Oops oven is still off!");

    log_info("Baking Cake");

    char * cake_status =  malloc(100);
    check_mem(cake_status);
    strcpy(cake_status, bake(250));
    
    if(cake_status = "burnt") {
        log_err("Cake Burnt!");
        dump_cake();
        make_cake();
    } else if(cake_status = "cold") {
        log_warn("Cake still not baked.");
        bake_cake();
    }

    turn_off_oven();
}

void print_recipe(const char * name) {
    FILE * input = NULL;
    char * page = NULL;

    page = malloc(1024);
    check_mem(page);

    input = fopen(name, "r");
    check(input, "Failed to open %s recipe.", name);
    
    fprintf(stdout, page);
    free(page);
    fclose(input);
    return;

    error:
        if(page) free(page);
        if(input) fclose(input);
}

int main() {
    make_cake();
}

`}</code>
                </div>

                <p style={{whiteSpace: 'pre-line', marginLeft: '4em'}}>
                {`
                    To run the code just write:
                `}</p>

                <p style={{color: 'gray', marginLeft: '4em', fontStyle: 'italic', fontFamily: 'monospace'}}>cc -DNDEBUG -o main main.c</p>

            </CustomBlog>

        </React.Fragment>
    )
}

const styles = {
    code: {
        fontFamily: "monospace, courier new",
        color: "crimson",
        padding: "2em",
        whiteSpace: 'pre',
    },
    comment: {
        fontFamily: "monospace, courier new",
        color: 'gray',
        whiteSpace: 'pre-line',
        padding: '2em',
    }
}

export default Blog_ErrorHandling