// /// <reference path="models/drag-drop-interfaces.ts" />
// /// <reference path="models/project-model.ts" />
// /// <reference path="state/project-state.ts" />
// /// <reference path="util/validation.ts" />
// /// <reference path="decorators/autobind-decorator.ts" />
// /// <reference path="components/base-component.ts" />
// /// <reference path="components/project-item.ts" />
import { ProjectList } from "./components/project-list";
import { ProjectInput } from "./components/project-input";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
