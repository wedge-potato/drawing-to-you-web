import logo from '../assets/logo.svg';
import DBadge from "../components/DBadge.tsx";
import DButton from "../components/DButton.tsx";
const LandingPage = () => {
    return (
        <>
            <div className='flex items-center flex-col gap-y-5'>
                <DBadge text='롤링페이퍼 공개까지 D-7' />
                <img src={logo} />
                <span className='whitespace-pre text-center'>{'직접 그린 하나뿐인 그림과\n마음이 담긴 편지를 받아보세요'}</span>
                <DButton text='그림 롤링페이퍼 받아보기' />
                <span className='text-[11px]'>지금까지 12,456개의 그림이 그려졌어요</span>
            </div>
        </>
    );
}

export default LandingPage;
