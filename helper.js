
class Helper {

    constructor(settings) {
       this.settings = settings; 
    }

    prepareWatch() {
        let watch = {
            options: {
                spawn: false,
                interrupt: false
            }
        }

        for(let item in this.settings.Themes) {
            watch[item] = {
                files: [`${this.settings.cwd}/${item}/**/*.scss`],
                tasks: [`chmod:init`, `sass:${item}`]
            }

            if(this.settings.minify) watch[item].tasks.push(`cssmin:${item}`);
            watch[item].tasks.push(`notify:compile`);
        }

        return watch
    }

    prepareSass() {
        let sass = {
            options: {
                sourceMap: !!this.settings.debugMode
            }
        }

        for(let item in this.settings.Themes) {
            sass[item] = {
                files: {}
            }
            sass[item].files[`${this.settings.cwd}/${item + this.settings.Themes[item].dist}`] = `${this.settings.cwd}/${item + this.settings.Themes[item].src}`
        }

        return sass
    }

    prepareCssMin() {
        let cssmin = {
            options: {
                report: 'gzip',
                sourceMap: !!this.settings.debugMode
            }
        }

        for(let item in this.settings.Themes) {
            cssmin[item] = {
                files: {}
            }
            cssmin[item].files[`${this.settings.cwd}/${item + this.settings.Themes[item].dist}`] = `${this.settings.cwd}/${item + this.settings.Themes[item].dist}`
        }

        return cssmin;
    }

    prepareCwdToChmod() {
        let novoCwd = [];
        for (let item in this.settings.Themes) {
            let novoItem = `${this.settings.cwd}/${item}/**/*.scss`
            let novoItemCss = `${this.settings.cwd}/${item}/**/*.css`
            let novoItemMap = `${this.settings.cwd}/${item}/**/*.css.map`
            novoCwd.push(novoItem)
            novoCwd.push(novoItemCss)
            novoCwd.push(novoItemMap)
        }
        return novoCwd
    }
}

module.exports = Helper