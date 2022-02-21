import React from 'react';
import * as bsIcon from 'react-icons/bs';
import * as ioIcon from 'react-icons/io';
import * as mdIcon from 'react-icons/md';

export default function PersonalContacts({ data }) {
    if (data.medianame === 'email') {
        return (
            <li>
                <a href={`mailto:${data.link}`}>
                    <mdIcon.MdEmail /> {data.link}
                </a>
            </li>
        );
    }
    if (data.medianame === 'phone') {
        return (
            <li>
                <a href={`tel:${data.link}`}>
                    <bsIcon.BsFillTelephoneFill /> {data.link}
                </a>
            </li>
        );
    }
    if (data.medianame === 'twitter') {
        return (
            <li>
                <a href={`tel:${data.link}`}>
                    <ioIcon.IoLogoWhatsapp /> {data.link}
                </a>
            </li>
        );
    }
    return null;
}
