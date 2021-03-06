import React from "react";
import PropTypes from "prop-types";
import { connect } from "~/utils/context";
import Button from "~/components/Button";
import DeployModal from "./DeployModal";

const HeaderActions = ({ api, app, environments, toggleModal }) => {
  return (
    <div className="mr-6">
      <Button
        primary
        className="rounded-xl py-3 font-bold"
        onClick={() => toggleModal(true)}
      >
        <span className="fas fa-rocket mr-4 text-lg" />
        <span className="text-sm">Deploy now</span>
      </Button>
      <DeployModal api={api} app={app} environments={environments} />
    </div>
  );
};

HeaderActions.propTypes = {
  api: PropTypes.object,
  app: PropTypes.object,
  environments: PropTypes.array,
  toggleModal: PropTypes.func
};

export default connect(HeaderActions, [
  {
    Context: DeployModal,
    props: ["toggleModal"],
    wrap: true
  }
]);
