/*
* @Author: ben_cripps
* @Date:   2015-05-22 14:29:47
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-11-19 20:55:03
*/
import colors from './colors.js';

export class Helper {
    constructor() {
        this.template = this.templateFunc;
    }
    templateFunc(obj) {

        let base = {
            baseDir: '',
            routes: [
                {
                    name: 'home',
                    uri: '/'
                },
                {
                    name: 'about',
                    uri: '/about'
                },
                {
                    name: 'blogs',
                    uri: '/blog'
                },
                {
                    name: 'projects',
                    uri: '/projects'
                }
            ],
            colors: colors()
        };

        Object.keys(obj).map((k) => {
            if (k === 'vars') {
                Object.keys(obj[k]).forEach((internalK) => {
                    base[internalK] = obj[k][internalK];
                });
            }
            else {
                base[k] = obj[k];
            }
        });

        return base;

    }
}