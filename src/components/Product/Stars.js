import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';


export const Stars = ({stars}) => {


    return (
        <>
            {
            stars === 1 ?
                <>
                    <StarIcon className="star" />
                    <StarBorderIcon className="star" />
                    <StarBorderIcon className="star" />
                    <StarBorderIcon className="star" />
                    <StarBorderIcon className="star" />
                </>  
            : stars === 2 ?
                <>
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarBorderIcon className="star" />
                    <StarBorderIcon className="star" />
                    <StarBorderIcon className="star" />
                </>
            : stars === 3 ?
                <>
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarBorderIcon className="star" />
                    <StarBorderIcon className="star" />
                </>
            : stars === 4 ?
                <>
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarBorderIcon className="star" />
                </>
                
            :
                <>
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />       
                    <StarIcon className="star" />       
                </>
                    
            }     
        </>
    )
}
