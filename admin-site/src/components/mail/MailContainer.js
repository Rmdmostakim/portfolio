import axios from 'axios';
import { useEffect, useState } from 'react';
import ApiLink from '../../rest api/ApiLink';
import Loader from '../Loader/Loader';
import MailsTable from './MailsTable';

export default function MailContainer() {
    const [mails, setMails] = useState();
    const [apiFailure, setApiFailure] = useState(true);
    const [reRender, setRerender] = useState(false);

    const onChangeRender = () => {
        setRerender(!reRender);
    };

    useEffect(() => {
        async function FetchData() {
            await axios
                .get(ApiLink.getAllMails)
                .then((response) => {
                    if (response.status === 200) {
                        setMails(response.data);
                        setApiFailure(false);
                    } else {
                        setApiFailure(true);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        FetchData();
    }, [reRender]);

    if (apiFailure === false) {
        return <MailsTable mails={mails} onChangeRender={onChangeRender} />;
    }
    return <Loader />;
}
