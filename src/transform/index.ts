import { transformHeaderObjMap } from "./headers";
import { transformResponsesObj } from "./responses";
import { transformSchemaObjMap } from "./schema";

interface TransformOptions {
  rawSchema?: boolean;
  version: number;
}

export function transformAll(schema: any, { version }: TransformOptions): string {
  let output = "";

  switch (version) {
    case 2: {
      // #/definitions
      output += `declare namespace Mars {\n  ${transformSchemaObjMap(schema.definitions || {}, {
        required: Object.keys(schema.definitions),
        expose: true,
      })}\n}\n\n`;

      // #/parameters
      if (schema.parameters) {
        const required = Object.keys(schema.parameters);
        output += `interface parameters {\n    ${transformSchemaObjMap(schema.parameters, {
          required,
        })}\n  }\n\n`;
      }

      // #/parameters
      if (schema.responses) {
        output += `interface responses {\n    ${transformResponsesObj(schema.responses)}\n  }\n\n`;
      }
      break;
    }
    case 3: {
      // #/components
      output += `export interface components {\n`; // open components

      if (schema.components) {
        // #/components/schemas
        if (schema.components.schemas) {
          const required = Object.keys(schema.components.schemas);
          output += `  schemas: {\n    ${transformSchemaObjMap(schema.components.schemas, { required })}\n  }\n`;
        }

        // #/components/responses
        if (schema.components.responses) {
          output += `  responses: {\n    ${transformResponsesObj(schema.components.responses)}\n  }\n`;
        }

        // #/components/parameters
        if (schema.components.parameters) {
          const required = Object.keys(schema.components.parameters);
          output += `  parameters: {\n    ${transformSchemaObjMap(schema.components.parameters, {
            required,
          })}\n  }\n`;
        }

        // #/components/requestBodies
        if (schema.components.requestBodies) {
          const required = Object.keys(schema.components.requestBodies);
          output += `  requestBodies: {\n    ${transformSchemaObjMap(schema.components.requestBodies, {
            required,
          })}\n  }\n`;
        }

        // #/components/headers
        if (schema.components.headers) {
          output += `  headers: {\n    ${transformHeaderObjMap(schema.components.headers)}  }\n`;
        }
      }

      output += `}\n\n`; // close components
      break;
    }
  }

  return output.trim();
}
