

export const send = async(req, res) => {
    try {
        const {message} = req.body;
        const {id} = req.params.id;

        const userId = req.userId;

    } catch (e) {
        console.log(`Error in message controller: ${e}`);
        res.status(500).json({error: `Interal server error`});
    }
}