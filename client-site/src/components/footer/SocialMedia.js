import React from 'react';
import * as aiIcon from 'react-icons/ai';
import * as bsIcon from 'react-icons/bs';
import * as mdIcon from 'react-icons/md';

export default function FacebookLink({ data }) {
    if (data.medianame === 'facebook') {
        return (
            <li>
                <a href={data.link} target="_blank" rel="noreferrer">
                    <mdIcon.MdFacebook /> Facebook
                </a>
            </li>
        );
    }
    if (data.medianame === 'github') {
        return (
            <li>
                <a href={data.link} target="_blank" rel="noreferrer">
                    <aiIcon.AiFillGithub /> Github
                </a>
            </li>
        );
    }
    if (data.medianame === 'twitter') {
        return (
            <li>
                <a href={data.icon} target="_blank" rel="noreferrer">
                    <aiIcon.AiFillTwitterCircle /> Twitter
                </a>
            </li>
        );
    }
    if (data.medianame === 'instagram') {
        return (
            <li>
                <a href={data.link} target="_blank" rel="noreferrer">
                    <aiIcon.AiFillInstagram /> Instagram
                </a>
            </li>
        );
    }
    if (data.medianame === 'linkedin') {
        return (
            <li>
                <a href={data.link} target="_blank" rel="noreferrer">
                    <bsIcon.BsLinkedin /> Linkedin
                </a>
            </li>
        );
    }
    return null;
}
