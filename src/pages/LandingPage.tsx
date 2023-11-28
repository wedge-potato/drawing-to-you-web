import logo from '../assets/logo.svg';
import DBadge from "../components/DBadge.tsx";
const LandingPage = () => {
    return (
        <>
            <div className='flex items-center flex-col gap-y-5'>
                <DBadge text='롤링페이퍼 공개까지 D-7' />
                <img src={logo} />
                <span className='whitespace-pre text-center'>{'직접 그린 하나뿐인 그림과\n마음이 담긴 편지를 받아보세요'}</span>
            </div>
        </>
    );
}

export default LandingPage;
