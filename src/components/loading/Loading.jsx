import { CircularProgress } from "@mui/material";
import { Backdrop } from "@mui/material";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

const LoadingOverlay = () => {
    // useIsFetching and useIsMutating both return the number of in-progress queries/mutations
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();

    const isLoading = isFetching > 0 || isMutating > 0;

    return (
        <Backdrop
            open={isLoading}
            style={{ zIndex: 2000 }} // Ensuring the spinner is on top of everything
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

export default LoadingOverlay;