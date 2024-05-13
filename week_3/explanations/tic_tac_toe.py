# function to play as main entry point
# function to display board
# start with the drawing as described

board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

# usage of format
print('I love {} for "{}!"'.format(board[0][0], board[0][1]))

playerX = 0
playerY = 0
counter = 0
won = False

is_player_x = True
winner = 'X' # can then change with Y

def play():
    while counter < 9 and won == True:
        # continue game
        None

    raise NotImplementedError()

def display_board():
    raise NotImplementedError()

def player_input(player):
    print("Player {}'s turn".format(player))
    input_row = input('Enter row')
    input_col = input('Enter col')

    row = int(input_row)
    col = int(input_col)

    # if board[row][col] == ''
    # add player
    # elsee
    # print message that this position is already played

def player_turn():
    if is_player_x == True:
        print() # Player X turn
    else:
        print() # Player Y turn
    is_player_x = not is_player_x

def check_win():
    if (board[0][0] == 'X' and board[0][1] == 'X' and board[0][2] == 'X') or (board[1][0] == 'X' and board[1][1] == 'X' and board[1][2] == 'X') or (board[2][0] == 'X' and board[2][1] == 'X' and board[2][2] == 'X'):
        winner = 'X'
        return 'Player X wins'
    raise NotImplementedError()