import { IPractice } from '../IPractice';
import { PracticeEvaluationResult, PracticeImpact, ProgrammingLanguage } from '../../model';
import { DxPractice } from '../DxPracticeDecorator';
import { PracticeContext } from '../../contexts/practice/PracticeContext';

@DxPractice({
  id: 'JavaScript.PackageJsonConfigurationSetCorrectly',
  name: 'Configure Scripts in package.json',
  impact: PracticeImpact.medium,
  suggestion:
    'Use correct configurations to automate repetitive tasks. Use build for automating the build process, lint for linting your code, tests for testing and start for running your project.',
  reportOnlyOnce: true,
  url: 'https://docs.npmjs.com/files/package.json',
  dependsOn: { practicing: ['Javascript.PackageManagementUsed'] },
})
export class JsPackageJsonConfigurationSetCorrectlyPractice implements IPractice {
  async isApplicable(ctx: PracticeContext): Promise<boolean> {
    return (
      ctx.projectComponent.language === ProgrammingLanguage.JavaScript || ctx.projectComponent.language === ProgrammingLanguage.TypeScript
    );
  }

  async evaluate(ctx: PracticeContext): Promise<PracticeEvaluationResult> {
    if (ctx.fileInspector === undefined) {
      return PracticeEvaluationResult.unknown;
    }

    const content = await ctx.fileInspector.readFile('/package.json');
    let parsedPackageJson;

    if (content) {
      try {
        parsedPackageJson = JSON.parse(content);
      } catch (error) {
        if (error instanceof SyntaxError) {
          return PracticeEvaluationResult.unknown;
        }
        throw error;
      }
    }

    if (
      parsedPackageJson.scripts &&
      parsedPackageJson.scripts.test &&
      parsedPackageJson.scripts.lint &&
      parsedPackageJson.scripts.build &&
      parsedPackageJson.scripts.start
    ) {
      return PracticeEvaluationResult.practicing;
    }

    return PracticeEvaluationResult.notPracticing;
  }
}
