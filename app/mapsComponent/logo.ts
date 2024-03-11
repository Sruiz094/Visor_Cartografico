//Configuración para los controles de capas 
import { Control, ControlPosition, DomUtil, Util } from "leaflet";
import { isExpressionWithTypeArguments } from "typescript";

const logotipo = Control.extend({
    options: {
        position: "topright",
        img: "https://media.licdn.com/dms/image/C5603AQG065Xv7p3cOg/profile-displayphoto-shrink_400_400/0/1517569390205?e=2147483647&v=beta&t=7NJ_tRaWDOtsLRH4VZUhitbSd29Pz40miTh2wLLc7P8",
         //'.../img/AFI.jpg',
        border: false
    },

    initialize: function(options: {
        position: ControlPosition, img: string, border: boolean
    }) {
        Util.setOptions(this, options);
    },

    onAdd: function() {
        const img = DomUtil.create('img');

        img.src = this.options.img;
        img.style.width = '45px';
        if (this.options.border) {
            img.style.borderBottom = "3px solid white";
        }
        return img;
    },
});

export const Logotipo = (options?: {
    position?: ControlPosition, img?: string, border?: boolean
}) =>  new logotipo(options);