import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { compileTemplate } from '../utils';

export function hierachySymbol(item: any) {

  return item.reflection.extendedBy ? '' : '↳ ';
}
