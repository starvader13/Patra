
const SuspenseLoading = (): JSX.Element => {
    return (
        <div className={"h-screen flex justify-center items-center"}>
            <img src="/loading.gif" alt="Loading"/>
        </div>
    );
};

export default SuspenseLoading;