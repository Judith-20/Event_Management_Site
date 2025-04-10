import PropTypes from "prop-types";

GreenButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

YellowBorderButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export function GreenButton({ onClick, children, type }) {
  const base =
    "bg-[#174C4D] rounded-lg text-white md:text-xl p-2.5 font-Lato focus:outline-none transition-colors duration-300 hover:bg-[rgba(23,76,77,0.8)] ";

  const styles = {
    // long: base + 'px-4 md:px-20 py-[0.7rem]',
    // long: base + "p-2.5 md:p-4 w-[24rem]",
    long: base + "w-[24rem]",
    // short: base + "py-[0.7rem] px-10 md:px-16 w-[24rem]",
      short: base + "w-[15rem]",
    secondary:base + "w-full "
    // secondary: 'uppercase text-sm font-semibold text-stone-400 inline-block tracking-wide rounded-full hover:text-stone-800 hover:bg-stone-300 transition-colors duration-300 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 py-2.5 px-4 disabled:cursor-not-allowed border-2 border-stone-300 md:px-6 md:py-3.5'
  };
  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export function YellowBorderButton({ children, onClick, type }) {
  const base =
    "border-[#F69A22] border-[1.9px] text-[#F69A22] rounded-lg md:text-xl font-Lato focus:outline-none transition-colors duration-300 hover:text-orange-50 hover:bg-[#F69A22] ";

  const styles = {
    // long: base + 'px-4 md:px-20 py-[0.7rem]',
    long: base + "p-2.5 w-[24rem]",
    short: base + "p-2.5 w-[15rem]",
  };
  return (
    <button
          className={styles[type]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
