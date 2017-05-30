import { compileTemplate } from '../utils';

export function compileGroup(group: any) {

    let md: hbs.SafeString = '';
    console.log(group.title);
    switch (group.title) {

        case 'Properties':
            md = compileTemplate(`partials/members.group.properties.hbs`, group);
            break;

        default:
            md = compileTemplate(`partials/members.group.hbs`, group);

    }

    return md;
}
