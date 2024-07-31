"use client";
import PreviewButton from "@/src/components/elements/PreviewButton";
import ResultButton from "@/src/components/elements/ResultButton";
import CardMatrix from "@/src/components/fragments/CardMatrix";
import ResultContainer from "@/src/components/fragments/ResultContainer";
import PreviewMode from "@/src/components/layouts/PreviewMode";

import {
  useCreateOrdo,
  useMultiplication,
  useSetMatrix,
  useSettingOrdo,
  useToggle,
} from "@/src/hooks/index";

const MatrixMultiplication = () => {
  // setting ordo
  const {
    row: row1,
    col: col1,
    handleSettingOrdo: handleSettingOrdo1,
  } = useSettingOrdo();
  const {
    row: row2,
    col: col2,
    handleSettingOrdo: handleSettingOrdo2,
  } = useSettingOrdo();

  // set matrix input element / ordo
  const ordoElements1 = useCreateOrdo(row1, col1);
  const ordoElements2 = useCreateOrdo(row2, col2);

  // set matrix
  const { matrix: matrixA, handleSetMatrix: handleSetMatrix1 } = useSetMatrix(
    row1,
    col1,
  );
  const { matrix: matrixB, handleSetMatrix: handleSetMatrix2 } = useSetMatrix(
    row2,
    col2,
  );
  // MULTIPLICATION FUNCTION
  const { mulResult, mulFunc } = useMultiplication();
  //TOGGLE
  const { Toggle: mulToggle, toggled: mulToggled } = useToggle();

  return (
    <div className="flex lg:flex-row flex-col gap-3 mx-auto px-4">
      <section className="flex flex-col justify-center items-center w-auto h-auto">
        <div className="flex sm:flex-row flex-col gap-3 w-full">
          <CardMatrix>
            <CardMatrix.Header>MATRIX A</CardMatrix.Header>
            <CardMatrix.SettingOrdo
              handleSettingOrdo={(e) =>
                handleSettingOrdo1(e, "Matrix A's dimensions have been created")
              }
              row={row1}
              col={col1}
              title={`Matrix A's dimensions have been created`}
            />
            <CardMatrix.SetMatrix
              handleSetMatrix={(e) => handleSetMatrix1(e, "Matrix A submitted")}
            >
              {ordoElements1}
            </CardMatrix.SetMatrix>
          </CardMatrix>
          <CardMatrix>
            <CardMatrix.Header>MATRIX B</CardMatrix.Header>
            <CardMatrix.SettingOrdo
              handleSettingOrdo={(e) =>
                handleSettingOrdo2(e, "Matrix B's dimensions have been created")
              }
              row={row2}
              col={col2}
              title={`Matrix B's dimensions have been created.`}
            />
            <CardMatrix.SetMatrix
              handleSetMatrix={(e) => handleSetMatrix2(e, "Matrix B submitted")}
            >
              {ordoElements2}
            </CardMatrix.SetMatrix>
          </CardMatrix>
        </div>
        <ResultButton funcLogic={() => mulFunc(matrixA, matrixB)} />
        <ResultContainer operationIdentity={"A x B ="} results={mulResult} />
      </section>
      {!mulToggled && <PreviewButton toggleFN={mulToggle} />}
      {mulToggled && (
        <PreviewMode
          toggleFN={mulToggle}
          matrixA={matrixA}
          matrixB={matrixB}
          result={mulResult}
          identity="x"
        />
      )}
    </div>
  );
};

export default MatrixMultiplication;
