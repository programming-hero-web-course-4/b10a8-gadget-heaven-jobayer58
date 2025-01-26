import errorImg from '../../../assets/images (1).jpeg'

const ErrorPage = () => {
    return (
        <div className='object-cover h-full w-1/2 mx-auto'>
            <img className='h-full w-full object-cover' src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;