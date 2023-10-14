"use client"

import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export function NavLinkManual({ href = '', className, follow = true,fromRoot=false, ...props }) {
    /*
    className:
        function returing string or class
        string function (isActive){
            return string
        }
    follow:
        will the link is following the current url or not
        false: the url start from /
        true: the url is following the current url
    formRoot:
        true: the url from root of website. that means from localhost starting
    */
    const pathName = usePathname();
    const segment = useSelectedLayoutSegment();
    // const segments = useSelectedLayoutSegments();
    const [isActive, setIsActive] = useState(false)
    const [classrealName, setclassrealName] = useState(className ? className(isActive) : '')
    const [realUrl, setRealUrl] = useState(
        fromRoot
        ?
        href
        :
        follow
            ? pathName + extractUrl(href)
            : extractUrl(href)
    )

    function extractUrl(href) {
        try {
            if (href.startsWith('/')) {
                return href;
            } else {
                return '/' + href
            }
        } catch (err) {
            console.log(err);
        }
    }
    function extractTabFromUrl(href) {
        if(href===null || href===undefined){
            href=''
        }
        try {
            if (href.startsWith('/')) {
                return href.substring(1);
            } else {
                return href
            }
        } catch (err) {
            console.log(err);
        }
    }
    // let classrealName = className?className(isActive):'';

    useEffect(
        () => {

            const tab = extractTabFromUrl(segment)

            console.log('segment', tab);
            console.log('tab', extractTabFromUrl(href));

            if (tab === extractTabFromUrl(href)) {
                setclassrealName(className ? className(true) : '')
                setIsActive(true)
            } else {
                setclassrealName(className ? className(false) : '')
                setIsActive(false)
            }
        }
        , [pathName]
    )

    return (
        <Link href={realUrl} className={classrealName} {...props}>
            {props.children}
        </Link>
    )
}
