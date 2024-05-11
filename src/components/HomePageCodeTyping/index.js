import React from 'react';

export default function TypingCode() {
    return (
        <div style={{position: 'absolute', float: 'left', zIndex: 1, width: '100%', textAlign: 'left'}}>
            <div className="row">
                <div className="col typecode" style={{width: '100%', marginLeft: '50px'}}><p><img
                    src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=2000&pause=500&multiline=true&width=435&height=100&separator=%3C&lines=%24a+%3D+nd%3A%3Aarray(%5B%5B1%2C+2%5D%2C+%5B3%2C+4%5D%5D);%3C%24b+%3D+%24a+*+2;%3Cprint_r(%24b);"
                    alt="Typing SVG"/></p></div>
                <div className="col typecode" style={{width: '100%', textAlign: 'right'}}><p><img
                    src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=2000&pause=500&multiline=true&width=435&height=100&separator=%3C&lines=%24a_gpu+%3D+%24a-%3Egpu();%3C%24b_gpu+%3D+%24b-%3Egpu();%3C%24m+%3D+nd%3A%3Amatmul(%24a_gpu%2C+%24b_gpu);"
                    alt="Typing SVG"/></p></div>
            </div>
        </div>
    );
}

