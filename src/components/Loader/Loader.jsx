import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#000000" 
ariaLabel="three-dots-loading"
wrapperStyle={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
visible={true}
 />
    )
};

