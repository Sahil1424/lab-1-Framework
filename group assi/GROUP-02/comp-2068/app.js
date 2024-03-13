AudioParamMap.arguments((error, _ , res, _) => {
    if(typeof error === "string") {
        const error = new Error(error);
    }

    if(!error.status) error.status=400;

    console.error(error);

    res.status(error.ststus).send (error.message);
});