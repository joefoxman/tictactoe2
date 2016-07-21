$(document).ready(function () {
	var firstPlayer = "x";
	var numMoves = 0;
	var wonGame = false;
	var isDraw = false;

	var changeWinnerSquares = function(squares, hv) {
		for (var i = 0; i < squares.length; i++) {
			var square = $("#board #" + squares[i]);
			if (square.length > 0) {
				$(square).addClass("win");
				if (hv === "h") {
					$(square).addClass("horizontal-line-center");
				}
				else if (hv === "v") {
					$(square).addClass("vertical-line-center");
				}
				else if (hv === "dr") {
					$(square).addClass("diagnoal-right-line");
				}
				else if (hv === "dl") {
					$(square).addClass("diagnoal-left-line");
				}
			}
		}
	}

	var checkIfWinner = function() {
		if ($("#board #1").hasClass('o') &&
			$("#board #2").hasClass('o') &&
			$("#board #3").hasClass('o')) {
			$("#winnerModal #winner-text").html("O has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations O, you have won the game!");
			changeWinnerSquares([1, 2, 3], "h");
			wonGame	= true;
		};
		if ($("#board #1").hasClass('x') &&
			$("#board #2").hasClass('x') &&
			$("#board #3").hasClass('x')) {
			$("#winnerModal #winner-text").html("X has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations X, you have won the game!");
			changeWinnerSquares([1, 2, 3], "h");
			wonGame	= true;
		};	

		if ($("#board #4").hasClass('o') &&
			$("#board #5").hasClass('o') &&
			$("#board #6").hasClass('o')) {
			$("#winnerModal #winner-text").html("O has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations O, you have won the game!");
			changeWinnerSquares([4, 5, 6], "h");
			wonGame	= true;
		};
		if ($("#board #4").hasClass('x') &&
			$("#board #5").hasClass('x') &&
			$("#board #6").hasClass('x')) {
			$("#winnerModal #winner-text").html("X has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations X, you have won the game!");
			changeWinnerSquares([4, 5, 6], "h");
			wonGame	= true;
		};	

		if ($("#board #7").hasClass('o') &&
			$("#board #8").hasClass('o') &&
			$("#board #9").hasClass('o')) {
			$("#winnerModal #winner-text").html("O has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations O, you have won the game!");
			changeWinnerSquares([7, 8, 9], "h");
			wonGame	= true;
		};
		if ($("#board #7").hasClass('x') &&
			$("#board #8").hasClass('x') &&
			$("#board #9").hasClass('x')) {
			$("#winnerModal #winner-text").html("X has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations X, you have won the game!");
			changeWinnerSquares([7, 8, 9], "h");
			wonGame	= true;
		};	

		if ($("#board #1").hasClass('o') &&
			$("#board #4").hasClass('o') &&
			$("#board #7").hasClass('o')) {
			$("#winnerModal #winner-text").html("O has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations O, you have won the game!");
			changeWinnerSquares([1, 4, 7], "v");
			wonGame	= true;
		};
		if ($("#board #1").hasClass('x') &&
			$("#board #4").hasClass('x') &&
			$("#board #7").hasClass('x')) {
			$("#winnerModal #winner-text").html("X has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations X, you have won the game!");
			changeWinnerSquares([1, 4, 7], "v");
			wonGame	= true;
		};	

		if ($("#board #2").hasClass('o') &&
			$("#board #5").hasClass('o') &&
			$("#board #8").hasClass('o')) {
			$("#winnerModal #winner-text").html("O has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations O, you have won the game!");
			changeWinnerSquares([2, 5, 8], "v");
			wonGame	= true;
		};
		if ($("#board #2").hasClass('x') &&
			$("#board #5").hasClass('x') &&
			$("#board #8").hasClass('x')) {
			$("#winnerModal #winner-text").html("X has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations X, you have won the game!");
			changeWinnerSquares([2, 5, 8], "v");
			wonGame	= true;
		};	

		if ($("#board #3").hasClass('o') &&
			$("#board #6").hasClass('o') &&
			$("#board #9").hasClass('o')) {
			$("#winnerModal #winner-text").html("O has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations O, you have won the game!");
			changeWinnerSquares([3, 6, 9], "v");
			wonGame	= true;
		};
		if ($("#board #3").hasClass('x') &&
			$("#board #6").hasClass('x') &&
			$("#board #9").hasClass('x')) {
			$("#winnerModal #winner-text").html("X has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations X, you have won the game!");
			changeWinnerSquares([3, 6, 9], "v");
			wonGame	= true;
		};	

		if ($("#board #1").hasClass('o') &&
			$("#board #5").hasClass('o') &&
			$("#board #9").hasClass('o')) {
			$("#winnerModal #winner-text").html("O has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations O, you have won the game!");
			changeWinnerSquares([1, 5, 9], "dr");
			wonGame	= true;
		};
		if ($("#board #1").hasClass('x') &&
			$("#board #5").hasClass('x') &&
			$("#board #9").hasClass('x')) {
			$("#winnerModal #winner-text").html("X has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations X, you have won the game!");
			changeWinnerSquares([1, 5, 9], "dr");
			wonGame	= true;
		};	

		if ($("#board #3").hasClass('o') &&
			$("#board #5").hasClass('o') &&
			$("#board #7").hasClass('o')) {
			$("#winnerModal #winner-text").html("O has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations O, you have won the game!");
			changeWinnerSquares([3, 5, 7], "dl");
			wonGame	= true;
		};
		if ($("#board #3").hasClass('x') &&
			$("#board #5").hasClass('x') &&
			$("#board #7").hasClass('x')) {
			$("#winnerModal #winner-text").html("X has won the game!");
			$("#winnerModal").modal("show");
			$("#game-winner").html("Congratulations X, you have won the game!");
			changeWinnerSquares([3, 5, 7], "dl");
			wonGame	= true;
		};	
	};

	$("#reset-game").on("click", function(){
		$("#board tr td").removeClass("o")
		.removeClass("x")
		.removeClass("win")
		.removeClass("horizontal-line-center")
		.removeClass("vertical-line-center")
		.removeClass("diagnoal-right-line")
		.removeClass("diagnoal-left-line")
		.html("");
		wonGame = false;
		numMoves = 0;
		firstPlayer = $("#first-player").find("option:selected").val();
		$("#game-winner").html("");
		isDraw = false;
	});

	$("#board tr td").on("click", function(){
		if (wonGame || isDraw) {
			return;
		};

		firstPlayer = $("#first-player").find("option:selected").val();
		var boxNumber = $(this).attr("id");
		if ($(this).hasClass("o") || $(this).hasClass("x")) {
			$("#noMoveModal").modal("show");
			return;
		}

		// all moves after the first are handled here
		var whosTurn = (numMoves % 2) + 1;

		if (whosTurn === 1 && firstPlayer === "o") {
			$(this).html("O");
			$(this).addClass("o");
		}
		else if (whosTurn === 1 && firstPlayer === "x"){
			$(this).html("X");
			$(this).addClass("x");
		}
		if (whosTurn === 2 && firstPlayer === "o") {
			$(this).html("X");
			$(this).addClass("x");
		}
		else if (whosTurn === 2 && firstPlayer === "x"){
			$(this).html("O");
			$(this).addClass("o");
		}

		numMoves++;

		checkIfWinner();

		if (!wonGame && numMoves===9){
			isDraw = true;
			// it is a draw
			$("#itsaDawModal").modal("show");
		}
	});	
});
